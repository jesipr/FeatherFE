<template>
  <div>
    <b-card-group>
      <tag v-on:delete-tag="deleteTag"
                v-for="tag in tags"
                :tag.sync="tag"></tag>
    </b-card-group>
  </div>
</template>

<script>
    import sweetalert from 'sweetalert';
    import Tag from "./Tag";
    export default {
        props: ['tags'],
        components: {
            Tag,
        },
        methods: {
            deleteTag(tag) {
                const self = this;
                sweetalert({
                    title: 'Are you sure?',
                    text: 'This area of interest will be permanently deleted!',
                    icon: 'warning',
                    type: 'input',
                    buttons: {
                        'cancel': {
                            text: "Cancel",
                            value: false,
                            visible: true,
                            className: "",
                            closeModal: true,
                        },
                        'confirm': {
                            text: "OK",
                            value: true,
                            visible: true,
                            className: "",
                            closeModal: false,
                        }
                    },
                }).then(function (inputValue) {
                    if (inputValue === true) {
                        const tagIndex = self.tags.indexOf(tag);
                        self.tags.splice(tagIndex, 1);
                        sweetalert('Deleted!', 'Your area of interest has been deleted.', 'success');
                    }
                });
            },
        }
    }
</script>

<style scoped>

</style>
