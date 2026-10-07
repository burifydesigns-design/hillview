from PIL import Image, ImageEnhance, ImageFilter, ImageOps
import os

def enhance_image(input_path, output_path, max_dimension=2000):
    """Enhance image quality while preserving identity."""
    with Image.open(input_path) as img:
        original_size = img.size
        print(f"Processing: {os.path.basename(input_path)} - Original: {original_size[0]}x{original_size[1]}")
        
        # Convert to RGB if needed
        if img.mode != 'RGB':
            img = img.convert('RGB')
        
        # Resize if larger than max_dimension (maintain aspect ratio)
        if max(img.size) > max_dimension:
            img.thumbnail((max_dimension, max_dimension), Image.Resampling.LANCZOS)
            print(f"  Resized to: {img.size[0]}x{img.size[1]}")
        
        # 1. Subtle noise reduction using a very light median filter
        # Only apply if image seems noisy - use a 3x3 kernel very lightly
        img = img.filter(ImageFilter.MedianFilter(size=3))
        
        # 2. Subtle sharpening - unsharp mask with conservative settings
        # radius=1, percent=50-80, threshold=3-5 to avoid halos
        img = img.filter(ImageFilter.UnsharpMask(radius=1, percent=75, threshold=3))
        
        # 3. Slight contrast enhancement (very subtle)
        enhancer = ImageEnhance.Contrast(img)
        img = enhancer.enhance(1.05)  # Only 5% contrast boost
        
        # 4. Slight brightness/exposure correction if needed
        enhancer = ImageEnhance.Brightness(img)
        img = enhancer.enhance(1.02)  # Only 2% brightness boost
        
        # 5. Slight color enhancement for natural skin tones
        enhancer = ImageEnhance.Color(img)
        img = enhancer.enhance(1.03)  # Only 3% color boost
        
        # Save as high-quality WebP (lossless=False, quality=95 for near-lossless)
        img.save(output_path, 'WEBP', quality=95, method=6)
        print(f"  Saved enhanced: {output_path} ({img.size[0]}x{img.size[1]})")
        
        # Also save as high-quality JPEG for fallback
        jpg_path = output_path.replace('.webp', '.jpg')
        img.save(jpg_path, 'JPEG', quality=95, optimize=True, progressive=True)
        print(f"  Saved JPEG fallback: {jpg_path}")

def main():
    input_dir = r'G:\PROJECTS\hillview physiotherapy\hillview-physiotherapy\public\images\team'
    output_dir = r'G:\PROJECTS\hillview physiotherapy\hillview-physiotherapy\public\images\team\enhanced'
    
    os.makedirs(output_dir, exist_ok=True)
    
    for fname in os.listdir(input_dir):
        if fname.endswith('.jpg') and not fname.startswith('enhanced'):
            input_path = os.path.join(input_dir, fname)
            base_name = os.path.splitext(fname)[0]
            output_path = os.path.join(output_dir, f"{base_name}.webp")
            enhance_image(input_path, output_path)

if __name__ == '__main__':
    main()