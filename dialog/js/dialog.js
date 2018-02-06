class Dialog{
    constructor(options){
        this.options = options;
        this.init();
    }
    get template(){
        let {title,content}=this.options;
        return '<div class="DemoDialog"><div class="DemoDialog-wrapper"><header class="DemoDialog-header">'+title+'</header><main class="DemoDialog-main">'+content+'</main><footer class="DemoDialog-footer"></footer></div></div>';
    }
    generateButtons(){
        let {buttons} = this.options
        buttons = buttons.map((buttonOption) => {
          let $b = $('<button></button>')
          $b.text(buttonOption.text)
          $b.on('click', buttonOption.action)
          return $b
        })
        return buttons;
    }
    init(){
        var $dialog = $(this.template);
        $dialog.find('footer').append(this.generateButtons());
        // $dialog.addClass(this.options.className);
        this.$dialog = $dialog;
    }
    open(){
        this.$dialog.appendTo("body");
    };
    close(){
        this.$dialog.detach();
    }
}