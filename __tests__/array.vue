<template>
  <div>
    <ul id="example-1">
      <li v-for="student in students" :key="student.id">
        {{ student.name }} {{ student.age }}岁
      </li>
    </ul>
  </div>
</template>

<script>
const { YArray } = require('../')

export default {
  created() {
    const students = [
      {
        id: 1,
        name: '张三',
        age: 20,
      },
      {
        id: 2,
        name: '李四',
        age: 19,
      },
      {
        id: 3,
        name: '李四',
        age: 18,
      },
    ]
    this.students = YArray.sortByKey(students, 'age')
    console.log(YArray)
  },
  data() {
    return {
      students: [],
    }
  },
  props: {},
  computed: {},
  methods: {},
  components: {},
}
</script>

<style scoped>

</style>
