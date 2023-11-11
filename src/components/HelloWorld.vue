<script setup>
import { reactive, ref, onMounted, watch} from 'vue'
import { deleteIdList,list } from '../util/api'

const emit=defineEmits(['Test'])
const props = defineProps({
  msg: String,

})
    //  test().then(res=>{
    //   console.log(res,'eeee')  
    //  })

    
  const chuancan=()=>{
    emit('Test','777')
  }

const count = ref(0)
const date=reactive({
  list:{},
  Image:'',
  ceshi:2,
  h1ref:null
})
const h1ref=ref(null)
onMounted(()=>{
  addlList()
// console.log(props,"ooo")
// console.log(h1ref.value,"1o")
  });
// login({
//             name: 'admin',
//             password: '123456'
//           }).then(res=>{
//       console.log(res,'222')
//      })
  const getList=()=>{
    list().then(res=>{
      console.log(res,'get')
      date.list=res.data
      date.Image=Object.keys(date.list).length>0?date.list[16].provwer:''
     })
  }

  const addlList=()=>{
    deleteIdList({
            id:33
            // name: 'admin',
            // provwer: '32'
          }).then(res=>{
      console.log(res,'222')
      getList()
     })
  } 


</script>

<template>
  <h1 ref='h1ref'>{{ msg }}{{ date.ceshi }}</h1>
  
  <div>11{{ date.Image }}33</div>
  <img :src=date.Image />
  <button @click="chuancan()">click传参</button>
  <div class="card">
    <button type="button" @click="date.ceshi++">count is {{ count }}</button>
  
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
