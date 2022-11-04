<template>
  <section>
    <header><h1>My Friends</h1></header>
    <ul>
      <friend-contact></friend-contact>
      <friend-contact></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {

  data() {
    return {
      friends : [
        {
          id: 'manual',
          name: 'Manual Lorenz',
          phone: '708 275 2525',
          email: 'lorenzmanual@rediffmail.com'
        },
        {
          id: 'Damien',
          name: 'Damien Martinez',
          phone: '702 266 1997',
          email: 'damienmartinez@rediffmail.com'
        }
      ]
    }
  }
}

</script>