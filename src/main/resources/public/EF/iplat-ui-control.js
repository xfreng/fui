efImportFile = function (libraryName) {
    document.write('<script type="text/javascript" src="' + libraryName + '"></script>');
};

//定义引用文件清单
var _iplat_ui_include_files = [
    "/webjars/fui/public/EF/jQuery/jquery.ba-resize.min.js",
    "/webjars/fui/public/EF/jQuery/jquery.tab.js",
    "/webjars/fui/public/EF/jQuery/jquery.treeTable.js",
    "/webjars/fui/public/EF/jQuery/jquery.flexbox.js",
    "/webjars/fui/public/EF/jQuery/jquery.colorbox.js",

    "/webjars/fui/public/EF/Common/EIInfo.js",
    "/webjars/fui/public/EF/Common/json_util.js",
    "/webjars/fui/public/EF/Common/iplat.ui.core.js",
    "/webjars/fui/public/EF/Common/iplat.ui.ico.js",
    "/webjars/fui/public/EF/Common/iplat.ui.utils.js",
    "/webjars/fui/public/EF/Common/iplat.ui.domUtils.js",

    "/webjars/fui/public/EF/Form/iplat.ui.form.js",

    "/webjars/fui/public/EF/FeedBack/canvas2image.js",
    "/webjars/fui/public/EF/FeedBack/feedback.js",
    "/webjars/fui/public/EF/FeedBack/html2canvas.min.js",

    "/webjars/fui/public/EF/jQuery/iplat.ui.button.js",

    "/webjars/fui/public/EF/Tree/iplat.ui.accordionTree.js",
    "/webjars/fui/public/EF/Tree/iplat.ui.treeModel.js",
    "/webjars/fui/public/EF/Tree/iplat.ui.treeTemplate.js",
    "/webjars/fui/public/EF/Tree/iplat.ui.tree.js",
    "/webjars/fui/public/EF/Tree/iplat.ui.menuTree.js",
    "/webjars/fui/public/EF/Tree/iplat.ui.menu.js",

    "/webjars/fui/public/EF/Common/iplat.ui.debugger.js",

    "/webjars/fui/public/EF/Common/iplat.ui.scrolltop.js"
];
for (var index in _iplat_ui_include_files) {
    efImportFile(_iplat_ui_include_files[index]);
}