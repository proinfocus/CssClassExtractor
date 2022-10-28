# CssClassExtractor
A tiny JavaScript utility to extract all defined classes in the HTML to clipboard to be retrieve where its required.

## Usage
- Create your `.html` document as usual by defining the class names in whatever tags you want.
- Add **class-extractor.js** to your `.html` page and provide whatever shortcut key you want to execute the extractor to retrieve the classes.
- Make sure to run the `.html` document and press the defined shortcut key or F11 (default) to extract the classes from the running `.html` page.
- You can now paste the captured class names wherever you want.
```
<script src='https://proinfocus.github.io/CssClassExtractor/class-extractor.js'></script>
<script>
  shortcutKey = "F12";
</script>
```

## Example
**`.html` file**
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Class Extractor</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <div class="header">
        <div class="brand"></div>
        <div class="navigation"></div>
    </div>

    <div class="content">
        <div class="left-pane"></div>
        <div class="right-pane"></div>
    </div>

    <div class="footer">
        <div class="copyright"></div>
        <div class="sitemap"></div>
    </div>
    
    <script src="https://proinfocus.github.io/CssClassExtractor/class-extractor.js"></script>    
</body>
</html>
```

When `F11` is pressed, the class names are extracted and set to clipboard. The following is the result of the above `.html` file when the captured class names are pasted.

**`.css`** file

```
.header {}
.brand {}
.navigation {}
.content {}
.left-pane {}
.right-pane {}
.footer {}
.copyright {}
.sitemap {}
```
