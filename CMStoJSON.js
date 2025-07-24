<script>
    var CMSitems = document.getElementsByClassName("CMSItem");

    var CMSJSONItem
    var CMSJSONValue
    var CMSItemChildren
    var CMSName
    var CMSValue

    for (let i = 0; i < CMSitems.length; i++) {
        CMSItemChildren = CMSitems[i].children
        for (let i = 0; i < CMSItemChildren.length; i++) {
            CMSName = CMSItemChildren[i].id
            CMSValue = CMSItemChildren[i].innerHTML

            // create JSON value
            if (i === CMSItemChildren.length - 1) {
                CMSJSONValue = '"' + CMSName + '": "' + CMSValue + '"'
            }else{
                CMSJSONValue = '"' + CMSName + '": "' + CMSValue + '",'
            }

            //add value to JSON obj
            if (i === CMSItemChildren.length - 1) {
                CMSJSONItem = CMSJSONItem + '{' + CMSJSONValue + '}'
            }else{
                CMSJSONItem = CMSJSONItem + '{' + CMSJSONValue + '},'
            }    
        }
        

        document.getElementById("slides").innerHTML = CMSJSONItem;
    }
</script>