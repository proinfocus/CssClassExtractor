let shortcutKey = "F11";
document.addEventListener("keydown", e => {
    if (e.key?.toLowerCase() === shortcutKey?.toLowerCase())
    {
        e.preventDefault();
        extractAndCopyToClipboard();        
    }
});

function extractAndCopyToClipboard()
{
    var css = document.querySelectorAll("*")
    var list = [];
    css.forEach(x => {
        var cl = x.classList.toString().split(' ');        
        cl.forEach(c => {
            if (c !== "") list.push("."+c)
        });        
    });

    var result = [...new Set(list)].toString();

    var cls = result.split(',');
    var final = '';
    cls.forEach(c => final += `${c} {}\n`);

    navigator.clipboard.writeText(final)
    .then(() => { alert("Generated classes copied to clipboard!");})
    .catch(() => { return; });
}