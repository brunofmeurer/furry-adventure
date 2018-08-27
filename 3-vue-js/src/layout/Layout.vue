<template>
  <div>
    <Menu></Menu>
    <Tab :visible="tab1">
      <List>
        <ItemType></ItemType>
        <ItemType></ItemType>
      </List>
    </Tab>
    <Tab :visible="tab2">
      Teste123
    </Tab>
  </div>
</template>
<script>
import Menu from '@/components/menu/Menu'
import Tab from '@/components/tab/Tab'
import List from '@/components/list/List'
import ItemType from '@/components/list/ItemType'
export default {
  components: {
    Menu,
    Tab,
    List,
    ItemType
  },
  name: 'Layout',
  data () {
    return {
      tab1: true,
      tab2: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
