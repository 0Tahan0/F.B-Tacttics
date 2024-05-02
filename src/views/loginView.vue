<template>
  <div class="h-screen bg-light2Color dark:bg-dark2Color">
    <div class="h-full w-full">
      <div class="container mx-auto h-full flex flex-col justify-center">
        <!-- max-w-screen-sm -->
        <div
          class="flex flex-col-reverse md:flex-row items-center justify-evenly"
        >
          <base-card class="md:w-1/2 shadow-xl z-20">
            <form action="/" class="grid gap-3">
              <div class="text-center">
                <!-- <p class="first-letter:text-mainColor text-3xl">F.B Tacttics</p> -->
              </div>
              <label for="username" class="text-sm">اسم المستخدم</label>
              <div class="flex items-center justify-between">
                <base-input
                  :icon="inputs.username.icon"
                  :type="inputs.username.type"
                  toolTip="الاسم الشخصي"
                  id="username"
                  name="username"
                  placeholder="الاسم"
                  v-model="inputs.username.value"
                  :validaion="inputs.username.validaion"
                />
              </div>
              <label for="useremail" class="text-sm">البريد الإلكتروني</label>

              <base-input
                :icon="inputs.email.icon"
                :type="inputs.email.type"
                toolTip="البريد ال‘لكتروني "
                id="useremail"
                name="useremail"
                placeholder="البريد الإلكتروني"
                v-model="inputs.email.value"
                :validaion="inputs.email.validaion"
              />
              <label for="userpassword" class="text-sm">كلمة المرور</label>

              <base-input
                :icon="inputs.password.icon"
                :type="inputs.password.type"
                toolTip="كلمة المرور "
                ref="pass"
                @iconClick="togglePass"
                id="userpassword"
                name="userpassword"
                placeholder="كلمة المرور"
                v-model="inputs.password.value"
                :validaion="inputs.password.validaion"
              />

              <base-button
                :disabled="noValidations"
                shape="slide"
                type="submit"
                value="تسجيل الدخول"
                placeholder="name"
                class="before:bg-mainColor py-2"
              />
            </form>
          </base-card>
          <div
            class="md:w-1/2 w-full h-full flex flex-col justify-center items-center relative before:absolute before:w-screen before:h-full before:top-0 before:left-1/2 before:-translate-x-1/2 before:-z-10 before:bg-gradient-to-r before:from-mainColor before:from-45% before:to-transparent before:to-50% z-10"
          >
            <the-logo bgNone />
          </div>
        </div>
      </div>
    </div>
    <base-button
      class="fixed left-1/2 -translate-x-1/2 bottom-10 bg-mainColor"
      rounded
      @click="changeMode()"
    >
      <the-icon :icon="['fas', mode == 'dark' ? 'moon' : 'sun']" />
    </base-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mode: "light",
      inputs: {
        username: {
          type: "text",
          icon: ["far", "user"],
          value: null,
          validaion: {
            status: null,
            msg: null,
          },
        },
        email: {
          type: "email",
          icon: ["far", "message"],
          value: null,
          validaion: {
            status: null,
            msg: null,
          },
        },
        password: {
          type: "password",
          icon: ["far", "eye-slash"],
          value: null,
          validaion: {
            status: null,
            msg: null,
          },
        },
      },
    };
  },
  computed: {
    noValidations() {
      if (
        this.inputs.username.validaion.status &&
        this.inputs.email.validaion.status &&
        this.inputs.password.validaion.status
      )
        return false;
      return true;
    },
  },
  methods: {
    togglePass() {
      if (this.inputs.password.type == "password") {
        this.inputs.password.type = "text";
        this.inputs.password.icon = ["far", "eye"];
      } else {
        this.inputs.password.type = "password";
        this.inputs.password.icon = ["far", "eye-slash"];
      }
    },
    checkName(val) {
      const nospecial = /[^a-zA-Z0-9أ-ي\s]/gi;
      if (val.trim() == "" || val.trim() == null) {
        this.inputs.username.validaion.status = false;
        this.inputs.username.validaion.msg = "الحقل فارغ";
      } else if (!isNaN(Number(val))) {
        this.inputs.username.validaion.status = false;
        this.inputs.username.validaion.msg = "الاسم لا يمكن أن يكون رقم";
      } else if (val.length > 30) {
        this.inputs.username.validaion.status = false;
        this.inputs.username.validaion.msg = "يجب أن يكون الاسم أقل من 30 محرف";
      } else {
        for (let i = 0; i < val.length; i++) {
          if (nospecial.test(val[i])) {
            this.inputs.username.validaion.status = false;
            this.inputs.username.validaion.msg = `" ${val[i]} "لا يجب أن يحتوي على محارف خاصة`;
            break;
          } else {
            this.inputs.username.validaion.status = true;
          }
        }
      }
    },
    checkEmial(val) {
      let pattern =
        /^[a-zA-Z0-9+_.-]+@([.*^a-zA-Z0-9]{4,10}[^.])+(.\w{2,4})$/gi;

      this.inputs.email.validaion.status = pattern.test(val);
      this.inputs.email.validaion.msg = "بريد إلكتروني خاطئ";
    },
    checkPassword(val) {
      const maxChar = 8;
      if (val.length < maxChar) {
        this.inputs.password.validaion.status = false;
        this.inputs.password.validaion.msg = `يجب أن تكون كلمة المرور أكبر من ${maxChar}`;
      } else this.inputs.password.validaion.status = true;
    },
    changeMode() {
      this.mode = this.mode == "dark" ? "light" : "dark";

      document.documentElement.setAttribute("data-mode", this.mode);
      localStorage.FBT_mode = this.mode;
    },
  },
  watch: {
    ["inputs.username.value"](val) {
      this.checkName(val);
    },
    ["inputs.email.value"](val) {
      this.checkEmial(val);
    },
    ["inputs.password.value"](val) {
      this.checkPassword(val);
    },
  },
  created() {
    if (localStorage.FBT_mode) this.mode = localStorage.FBT_mode;
    else localStorage.FBT_mode = this.mode;
    document.documentElement.setAttribute("data-mode", this.mode);
  },
};
</script>
