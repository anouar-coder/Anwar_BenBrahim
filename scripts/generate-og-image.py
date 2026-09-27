#!/usr/bin/env python3
"""Generates public/og-image.png (1200x630) from the site's own palette.

The colours are the oklch values declared in src/styles.css, converted to sRGB
here so the card matches the page instead of being hand-tuned.
"""
import math
import os

import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont

W, H = 1200, 630
OUT = os.path.join(os.path.dirname(__file__), "..", "public", "og-image.png")

SANS = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
MONO = "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf"


def oklch_to_srgb(lightness, chroma, hue_deg):
    """oklch -> 8-bit sRGB, mirroring the CSS color function."""
    h = math.radians(hue_deg)
    a, b = chroma * math.cos(h), chroma * math.sin(h)

    l_ = lightness + 0.3963377774 * a + 0.2158037573 * b
    m_ = lightness - 0.1055613458 * a - 0.0638541728 * b
    s_ = lightness - 0.0894841775 * a - 1.2914855480 * b

    l, m, s = l_**3, m_**3, s_**3

    rgb = (
        4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
        -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
        -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s,
    )

    def encode(channel):
        channel = max(0.0, min(1.0, channel))
        if channel <= 0.0031308:
            return round(channel * 12.92 * 255)
        return round((1.055 * channel ** (1 / 2.4) - 0.055) * 255)

    return tuple(encode(c) for c in rgb)


# The "Amber Signal" tokens from styles.css.
BG = oklch_to_srgb(0.148, 0.013, 260)
FG = oklch_to_srgb(0.955, 0.008, 90)
MUTED = oklch_to_srgb(0.685, 0.014, 260)
AMBER = oklch_to_srgb(0.815, 0.152, 75)
CYAN = oklch_to_srgb(0.775, 0.135, 185)

base = Image.new("RGB", (W, H), BG)


def glow(img, cx, cy, radius, color, strength, blur):
    """One soft radial light, added rather than pasted so it reads as light."""
    layer = Image.new("L", (W, H), 0)
    ImageDraw.Draw(layer).ellipse(
        (cx - radius, cy - radius, cx + radius, cy + radius), fill=round(255 * strength)
    )
    layer = layer.filter(ImageFilter.GaussianBlur(blur))
    tint = Image.new("RGB", (W, H), color)
    return Image.composite(Image.blend(img, tint, 0.85), img, layer)


base = glow(base, W - 60, -40, 330, AMBER, 0.30, 130)
base = glow(base, 60, H + 40, 300, CYAN, 0.20, 140)

# Blueprint grid, same 44px pitch as .grid-bg.
grid = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gdraw = ImageDraw.Draw(grid)
for x in range(0, W + 1, 44):
    gdraw.line((x, 0, x, H), fill=(255, 255, 255, 11), width=1)
for y in range(0, H + 1, 44):
    gdraw.line((0, y, W, y), fill=(255, 255, 255, 11), width=1)
base = Image.alpha_composite(base.convert("RGBA"), grid)

draw = ImageDraw.Draw(base)
mono_24 = ImageFont.truetype(MONO, 24)
mono_27 = ImageFont.truetype(MONO, 27)
mono_22 = ImageFont.truetype(MONO, 22)
sans_82 = ImageFont.truetype(SANS, 82)

LEFT = 80

# Brand, mirroring the header.
bx = draw.textlength("anwar", font=mono_24)
draw.text((LEFT, 74), "anwar", font=mono_24, fill=AMBER)
draw.text((LEFT + bx, 74), ".benbrahim", font=mono_24, fill=FG)

# Name.
nx = LEFT
for chunk, color in (("Anwar Ben Brahim", FG), (".", AMBER)):
    draw.text((nx, 232), chunk, font=sans_82, fill=color)
    nx += draw.textlength(chunk, font=sans_82)

draw.text((LEFT, 372), "Computer engineering @ ENIT", font=mono_27, fill=MUTED)
draw.text((LEFT, 416), "AI & cybersecurity", font=mono_27, fill=MUTED)

# Footer: availability plus location, mirroring the site footer.
draw.ellipse((LEFT, 532, LEFT + 9, 541), fill=AMBER)
tx = LEFT + 24
draw.text((tx, 522), "Open to internships", font=mono_22, fill=AMBER)
tx += draw.textlength("Open to internships", font=mono_22) + 20
draw.text((tx, 522), "/", font=mono_22, fill=MUTED)
tx += draw.textlength("/", font=mono_22) + 20
draw.text((tx, 522), "Tunis, Tunisie", font=mono_22, fill=AMBER)

base.convert("RGB").save(OUT, "PNG", optimize=True)
print(f"ecrit {os.path.abspath(OUT)} ({os.path.getsize(OUT) / 1024:.0f} Ko)")
