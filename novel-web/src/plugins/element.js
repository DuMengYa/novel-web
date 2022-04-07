import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElIcon,
  ElMenu,
  ElRadioButton,
  ElRadioGroup,
  ElMenuItemGroup,
  ElMenuItem,
  ElSubmenu
} from 'element-plus'

export default (app) => {
  app.use(ElButton)
  app.use(ElForm)
  app.use(ElFormItem)
  app.use(ElInput)
  app.use(ElIcon)
  app.use(ElMenu)
  app.use(ElRadioButton)
  app.use(ElRadioGroup)
  app.use(ElMenuItemGroup)
  app.use(ElMenuItem)
  app.use(ElSubmenu)
}

