<template>
    <div class="d-flex justify-content-center">
      <div class="row">
          <div class="col-12 mb-20">
                <h3>Seleccione archivos</h3>
          </div>
          <div class="div-upload col-12" >
               <input type="file" class="upload" id="file" v-on:change="nameFile(this.value)">
               <label for="file" class="col-1 rounded-circle shadow">
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
            nameFile: 'Hola',
        }
    },
    methods: { 
        // getNameFile() {
            
        // },
        sendClient() {
            return new Promise((resolve,reject) => {
                setTimeout(function() {
                    resolve(this.getNameFile);
                    reject('No hay arhivos seleccionados')
                }, 3000);
            });
        },
    }
}
</script>

<style>

h3 {
    color: #777;
    margin: 10px;
}
.upload {
    display: none;
}

.div-upload {
    width: 100px;
}

label {
    background: #fff;
    margin-top: 10px;
    cursor: pointer;
    position: absolute;
    margin: 50px;
    width: auto;
}

label > img {
    width: 60px;
    filter: invert(61%) sepia(61%) saturate(467%) hue-rotate(101deg) brightness(90%) contrast(86%);
}

.btn-send {
    border-color: #fff;
    border-style: none;
    padding: 5px 10px;
    background: #34bb7f;
    color: #fff;
    position: fixed;
    margin: 90px;
}

.btn-send:hover {
    background: #2eac78;
}

.btn-send > img {
    filter: invert(1);
}


</style>