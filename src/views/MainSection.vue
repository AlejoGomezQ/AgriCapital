<template>
    <div class="container d-flex justify-content-center">
      <div class="row">
          <div class="col-12 mb-20">
                <h3>Seleccione archivos</h3>
          </div>
          <div class="div-upload col-12">
               <input type="file" class="upload" id="file" @change="nameFile(this.value)">
                <label for="file" class="col-1 rounded-circle">
                    <img src="@/assets/Folder.svg" alt="folder">
                </label>
          </div>
          <div class="col-12 m-10 p-5">
              <button @click="sendClient" class="btn-send rounded-pill"> <img src="@/assets/Send.svg" alt="send">  Enviar cliente</button>
          </div>
      </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nameFile: '',
        }
    },
    methods: { 
        sendClient() {
           
        }
    }
}
</script>

<style>

h3 {
    color: #777;
}
.upload {
    display: none;
}

.div-upload {
    width: 100px;
}

label {
    background: #fff;
    position: static;
    margin-top: 10px;
    cursor: pointer;
}

label > img {
    width: 75px;
}

.btn-send {
    border-color: #fff;
    border-style: none;
    padding: 5px 10px;
    background: #34bb7f;
    color: #fff;
}

.btn-send:hover {
    background: #2eac78;
}

.btn-send > img {
    filter: invert(1);
}


</style>