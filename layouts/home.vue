<template>
  <div>
    <Header />
    <main class="flex-1 container flex flex-col pt-[208px]">
      <slot />
    </main>
    <Footer />
    <DropCampModal />
  </div>
</template>
