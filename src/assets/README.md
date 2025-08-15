# Assets Directory

This directory contains application assets such as images, logos, and other static files.

## Logo

To replace the icon-based logo with an actual image:

1. Add your logo file (e.g., `logo.png`) to this directory
2. Update the login screen to use the image:
   ```tsx
   import logo from '../assets/logo.png';
   
   // Replace the CustomIcon with:
   <Image source={logo} style={styles.logo} resizeMode="contain" />
   ```

## Recommended Logo Specifications

- Format: PNG with transparent background
- Size: 200x200px or larger (square preferred)
- For best results: Provide @2x and @3x versions for different screen densities