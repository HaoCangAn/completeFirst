
<template>
    <div >
      <div class="videoContainer">
      <video class="fullscreenVideo" id="bgVid" playsinline="" autoplay="" muted="" loop="">
        <source src="../../public/001.mp4" type="video/mp4">
      </video>
  </div>
      <el-table :data="date.list" style="width: 100%" max-height="250">
      <el-table-column fixed prop="id" label="Date" width="150" />
      <el-table-column prop="name" label="Name" width="120" />
      <el-table-column prop="provwer" label="State" width="120" />
      <el-table-column fixed="right" label="Operations" width="180">
        <template #default={row}>
          <el-button link type="primary" size="small" @click="handleClick(row)"
            >deleat</el-button
          >
          <el-button link type="primary" size="small" @click="handleClick"
            >Detail</el-button
          >
          <el-button link type="primary" size="small">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
      <el-button type="info" @click="updata" round>ADD</el-button>
      <el-button type="warning" round>Warning</el-button>
      <el-button type="danger" round>Danger</el-button>

      <el-form :label-position="labelPosition" label-width="80px" :model="date">
        <el-form-item label="名称">
          <el-input v-model="date.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-input v-model="date.provwer"></el-input>
        </el-form-item>
        <!-- <el-form-item label="活动形式">
          <el-input v-model="arr.type"></el-input>
        </el-form-item> -->
      </el-form>
    </div>
</template>
<script setup>
import { onMounted, reactive } from "vue"
import { list,deleteIdList,addList } from '../util/api'

onMounted(()=>{
    getList()
})
const date=reactive({
    list:[],
    Image:'',
    name:'',
    provwer:''
    
})
const handleClick = (row) => {
    deleteIdListss(row.id)
  console.log('click',row)
}
const updata=()=>{
  console.log('updat',date)
  addList(date).then(res=>{
    console.log(res,'addList')
    getList()
  })
  
}
const getList=()=>{
    list().then(res=>{
      console.log(res,'get')
      date.list=res.data
      // date.Image=Object.keys(date.list).length>0?date.list[16].provwer:''
     })
  }
const deleteIdListss=(date)=>{
    deleteIdList(date).then(res=>{
      console.log(res,'get')
      getList()
    //   date.list=res.data
    //   date.Image=Object.keys(date.list).length>0?date.list[16].provwer:''
     })
  }
</script>
<style scoped>
.videoContainer{
  position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -100;
    top: 0;
    left: 0;
}

.videoContainer:before{
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  display: block;
  z-index: -1;
  top: 0;
  left: 0;
  background: rgba(25,29,34,.65);
  background-size: cover;
}

.fullscreenVideo{
  width: 100%;
  height: 100%;
  object-fit: fill
}
</style>