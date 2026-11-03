import { ref } from 'vue'
import router from './router'

// 自己维护一个访问栈，用来判断"往前翻"还是"往回翻"
const stack = ref(['/'])
export const direction = ref('forward')

router.afterEach((to) => {
  const idx = stack.value.lastIndexOf(to.path)
  if (idx >= 0) {
    // 回到了栈里已有的页面：往回翻，并把栈截断
    direction.value = 'back'
    stack.value = stack.value.slice(0, idx + 1)
  } else {
    direction.value = 'forward'
    stack.value.push(to.path)
  }
})
