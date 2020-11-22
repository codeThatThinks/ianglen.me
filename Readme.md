# ianglen.me

My personal website, a static site generated using Jekyll, hosted on GitHub Pages.

## Markdown Notes

- Ensure that there is a space between images so that each gets wrapped with a `<p>`
- Include `project_posts.html` to list posts with full content whose `category` is set to `:slug` of the current page

## Image Notes

- Image URLs are relative to the post's image directory, so `myimage.jpg` becomes `/img/content/:project-slug/:slug/myimage.jpg`
- Set the `bg` property in a post's front matter to set a background image
- Set the `image` property in a project's front matter to set a project image

## Image Sizing

- Aspect ratio should be square or landscape
- Maximum width/height should be `1920px`
- Strip thumbnail and EXIF/XMP data
- Target size is `300kB` or smaller
