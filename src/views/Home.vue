<template>
  <!-- Left Side Container Begin-->
  <div class="w-1/2 h-screen md:pl-6 hidden md:block">
    <div
      class="flex h-screen w-3/4 mx-auto justify-center items-center flex-col gap-4 text-cst_white-100"
    >
      <div class="mt-4 w-full">
        <h3 class="text-4xl font-extralight">
          <span class="opacity-80 tracking-tighter">Hello,</span>
          <span class="text-2xl font-bold tracking-tighter ml-1">Emerald</span>
        </h3>
        <p class="opacity-60 tracking-normal text-xs font-light mt-3">
          Welcome to your dashboard, kindly sort through the user base
        </p>
      </div>
      <div class="mt-4 flex items-center w-full">
        <form action="#" class="flex">
          <button
            type="submit"
            class="bg-cst_primary-200 md:p-3 p-1 border border-cst_primary-200 rounded-l-2xl hover:bg-cst_primary-100 focus:outline-none transition ease-out duration-500 hover:opacity-70"
          >
            <i class="fas fa-search text-cst_white-100 p-1"></i>
          </button>
          <label for="search-user">
            <input
              type="text"
              name="search-user"
              id="search-user"
              placeholder="Find a user"
              class="bg-cst_primary-200 text-sm hover:bg-cst_primary-100 rounded-r-2xl pl-1 md:pr-20 border border-cst_primary-200 placeholder-cst_white-100 focus:outline-none focus:bg-cst_primary-100 transition ease-out duration-500 w-full h-9 md:h-14"
            />
          </label>
        </form>
      </div>
      <div class="mt-8 w-full">
        <div class="md:w-3/4">
          <h4 class="opacity-70 tracking-tight">Show Users</h4>
          <div class="grid grid-cols-3 mt-4">
            <div class="flex flex-col w-3/4">
              <a
                href="#"
                class="bg-cst_pink rounded-lg md:rounded-2xl md:h-20 h-12 flex justify-center items-center hover:bg-cst_primary-300 transition ease-in duration-500 hover:shadow-md hover:opacity-70 md:mt-1 shadow-xl"
                ><i class="fas fa-users md:text-3xl"></i
              ></a>
              <span
                class="text-xs tracking-tight font-light ml-1 md:ml-3 mt-1 md:mt-3 opacity-70"
                >All Users</span
              >
            </div>
            <div class="flex flex-col w-3/4 md:-ml-3">
              <a
                href="#"
                class="md:m-1 bg-cst_teal-300 rounded-lg md:rounded-2xl h-12 md:h-16 flex justify-center items-center hover:bg-cst_primary-300 transition ease-in duration-500 hover:shadow-md hover:opacity-70 shadow-xl"
                ><i class="fas fa-male md:text-3xl"></i
              ></a>
              <span
                class="text-xs tracking-tight font-light mt-2 opacity-70 ml-2"
                >Male Users</span
              >
            </div>

            <div class="flex flex-col w-3/4 md:-ml-3">
              <a
                href="#"
                class="md:m-1 bg-cst_indigo rounded-lg md:rounded-2xl h-12 md:h-16 flex justify-center items-center hover:bg-cst_primary-300 transition ease-in duration-500 hover:shadow-md hover:opacity-70 transform hover:scale-125 shadow-xl"
              >
                <i class="fas fa-female md:text-3xl"></i
              ></a>
              <span
                class="text-xs tracking-tight font-light mt-2 opacity-70 ml-2"
                >Female Users</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Left Side Container End-->
  <!-- Right Side Container Begin -->
  <div
    class="w-full md:w-1/2 h-screen bg-cst_white-400 border border-cst_primary-400 rounded-2xl shadow-2xl"
  >
    <div class="lg:w-11/12 px-1 mx-auto py-4"></div>
  </div>
  <!-- Right Side Container End -->
</template>

<script>
export default {
  name: "Home"
};
</script>
