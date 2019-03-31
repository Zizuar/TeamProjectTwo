<script>
(function (){
    var dropzone = document.getElementByID("dropzone");
    dropzone.ondrop = function(e) {
        e.preventDefault();
        this.className =
    }
    dropzone.ondragover = function(){
        this.className = "dropzone dragover";
        return false;
    }
    dropzone.ondragleave = function () {
        this.className = "dropzone";
        return false; 
    }
}());
</script>