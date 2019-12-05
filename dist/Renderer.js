class Renderer {

    render(ready) {
        $('.res').empty()
        const source = $('.insert').html();
        const template = Handlebars.compile(source);
        let newHTML = template({ ready });
        $('.res').empty().append(newHTML);
    }
}