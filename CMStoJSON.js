<script>
    var CMSitems = document.getElementsByClassName("CMSItem");

    var CMSJSON = ''
    var CMSItemChildren
    var CMSName
    var CMSValue

    for (let i = 0; i < CMSitems.length; i++) {
        CMSItemChildren = CMSitems[i].children
        for (let i = 0; i < CMSItemChildren.length; i++) {
            CMSName = CMSItemChildren[i].id
            CMSValue = CMSItemChildren[i].className

            console.log(CMSName,CMSValue)
        }
    }
</script>