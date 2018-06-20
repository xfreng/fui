efImportFile = function (libraryName) {
    document.write('<script type="text/javascript" src="' + libraryName + '"></script>');
};
efImportCSS = function (cssName) {
    document.write('<link href="' + cssName + '" rel="stylesheet" type="text/css"/>');
};
document.write('<link rel="icon"  href="/webjars/fui/app.ico"  type="image/x-icon"/>');
document.write('<link rel="SHORTCUT ICON"  href="/webjars/fui/app.ico"  type="image/x-icon"/>');

//css引用放在JS前面
efImportCSS("/webjars/fui/public/EF/Themes/base/jquery.ui.all.css");
efImportCSS("/webjars/fui/public/EF/iplat-ui-2.0.css");
efImportCSS("/webjars/fui/public/EF/FeedBack/base.css");

//定义引用文件清单
var _iplat_ui_include_files = [
    "/webjars/fui/public/EF/jQuery/jquery.ui.core.js",
    "/webjars/fui/public/EF/jQuery/jquery.ui.widget.js",
    "/webjars/fui/public/EF/jQuery/jquery.ui.mouse.js",
    "/webjars/fui/public/EF/jQuery/jquery.ui.slider.js",
    "/webjars/fui/public/EF/jQuery/jquery.ui.draggable.js",
    "/webjars/fui/public/EF/jQuery/jquery.ui.droppable.js",
    "/webjars/fui/public/EF/jQuery/jquery.ui.position.js",
    "/webjars/fui/public/EF/jQuery/jquery.ui.resizable.js",
    "/webjars/fui/public/EF/jQuery/jquery.ui.button.js",
    "/webjars/fui/public/EF/jQuery/jquery.ui.dialog.js",
    "/webjars/fui/public/EF/jQuery/jquery.ui.datepicker.js",
    "/webjars/fui/public/EF/iplat-ui-control.js"
];

for (var index in _iplat_ui_include_files) {
    efImportFile(_iplat_ui_include_files[index]);
}

document.write('<script language="text/javascript">__DEBUG = true;</script>');
