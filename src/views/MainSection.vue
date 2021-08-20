<template>
  <div class="d-flex justify-content-center">
    <div>
      <div class="d-flex justify-content-center">
        <h3>Seleccione archivos</h3>
      </div>
      <div class="div-upload d-flex justify-content-center">
        <input
          type="file"
          class="upload"
          id="file"
          @change="inputFileChange"
          multiple
        />
        <label for="file" class="rounded-circle shadow">
          <img src="@/assets/Folder.svg" alt="folder" />
        </label>
      </div>
      <div class="d-flex justify-content-center">
        <button
          @click="sendClient"
          class="btn-send rounded-pill d-flex justify-content-center"
        >
          <img src="@/assets/Send.svg" alt="send" />Enviar cliente
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nameFile: null,
    };
  },
  methods: {
    inputFileChange(eve) {
      this.nameFile = eve.target.files[0].name;
    },

    sendClient() {
      setTimeout(() => {
        alert(this.nameFile);
      }, 3000);
    },
  },
};
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
  width: 100%;
}

label {
  background: #fff;
  margin-top: 10px;
  cursor: pointer;
  position: absolute;
  margin: 50px;
}

label > img {
  max-width: 90px;
  filter: invert(61%) sepia(61%) saturate(467%) hue-rotate(101deg)
    brightness(90%) contrast(86%);
}

.btn-send {
  border-color: #fff;
  border-style: none;
  padding: 5px 10px;
  background: #34bb7f;
  color: #fff;
  margin: 150px;
  position: relative;
}

.btn-send:hover {
  background: #2eac78;
}

.btn-send > img {
  filter: invert(1);
}
</style>