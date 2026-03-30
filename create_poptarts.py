#!/usr/bin/env python3
from PIL import Image, ImageDraw

# Create Pop Tart product-style images
flavors = [
    ('images/poptarts/strawberry.jpg', '#e74c3c', '#ffb3ba', 'Strawberry'),
    ('images/poptarts/brown-sugar-cinnamon.jpg', '#8b6f47', '#d4a574', 'Brown Sugar\nCinnamon'),
    ('images/poptarts/blueberry.jpg', '#4a5899', '#7cb3d4', 'Blueberry'),
    ('images/poptarts/frosted-chocolate.jpg', '#3a2817', '#6b4e3d', 'Frosted\nChocolate'),
    ('images/poptarts/cherry.jpg', '#c41e3a', '#e85d75', 'Cherry'),
    ('images/poptarts/raspberry.jpg', '#d02d5f', '#f08fa5', 'Raspberry'),
    ('images/poptarts/unfrosted-strawberry.jpg', '#e74c3c', '#d4a574', 'Unfrosted\nStrawberry'),
    ('images/poptarts/smores.jpg', '#6b4e3d', '#e8d5c4', 'Smores'),
    ('images/poptarts/wildberry.jpg', '#7b2d8f', '#c285d4', 'Wildberry'),
    ('images/poptarts/french-toast.jpg', '#c4a574', '#e8c89c', 'French Toast'),
    ('images/poptarts/brown-sugar.jpg', '#8b6f47', '#d4a574', 'Brown Sugar'),
    ('images/poptarts/cookies-cream.jpg', '#f0f0f0', '#ffffff', 'Cookies &\nCream'),
]

for filepath, fill_color, frosting_color, label in flavors:
    # Create a 400x500 image
    img = Image.new('RGB', (400, 500), '#fbf5e9')
    draw = ImageDraw.Draw(img)
    
    # Draw Pop Tart pastry base
    draw.rectangle([50, 80, 350, 420], fill=fill_color, outline='#8b4513', width=3)
    
    # Draw frosting layer at top
    draw.rectangle([50, 80, 350, 140], fill=frosting_color)
    
    # Add some texture details
    for x in range(70, 330, 25):
        draw.line([(x, 150), (x + 10, 380)], fill='rgba(0,0,0,15)', width=1)
    
    # Add highlight shimmer
    draw.rectangle([60, 90, 340, 110], fill=frosting_color, outline=None)
    
    # Save the image
    img.save(filepath, 'JPEG', quality=90)
    print(f'✓ {filepath}')

print('\nAll Pop Tart images created successfully!')
