<template>
  <div>
    <button class="btn btn-primary" @click="openModal">Open Modal</button>

    <div v-if="isModalOpen" class="modal show" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header text-center">
            <h5 class="modal-title mx-auto">
              <slot name="title">Modal Title</slot>
            </h5>
            <button type="button" class="btn btn-secondary" @click="closeModal">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <slot name="content">Modal Content</slot>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>



<script>
import Vue from 'vue';
export default {
  data() {
    return {
      isModalOpen: false
    };
  },
  
  created() {
    // this.$root.$on('open-modal', () => {
    //   this.isModalOpen = true;
    // });
  },

  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    }
  }
};
</script>

<style scoped>
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s ease;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
}
</style>
