import { tag, Component, classNames, bind, signal } from 'omi'
// import css from '../app.css?raw'
import { tailwind } from '@/tailwind'
import { Router } from 'omi-router'
import { activeTab } from '@/routes'
import { componentsPages, formsPages } from '../pages'

export const menuShow = signal(window.innerWidth > 1024)

window.addEventListener('resize', () => {
  menuShow.value = window.innerWidth > 1024
})

window.addEventListener('click', () => {
  if (window.innerWidth < 1024) {
    menuShow.value = false
  }
})

window.addEventListener('touchstart', () => {
  if (window.innerWidth < 1024) {
    menuShow.value = false
  }
})

@tag('side-nav')
export class SideNav extends Component {
  static css = [tailwind]

  state = {
    actives: ['Components', 'Forms'],
  }

  router: Router | null = null

  @bind
  goBackHome(evt: MouseEvent) {
    evt.preventDefault()
    evt.stopPropagation()
    this.router?.push('/')
    menuShow.value = window.innerWidth > 1024
  }

  goTo(evt: MouseEvent, path) {
    evt.preventDefault()
    evt.stopPropagation()
    this.router?.push(path)
    menuShow.value = window.innerWidth > 1024
    activeTab.value = 'overview'
  }

  @bind
  toggle(evt: MouseEvent) {
    const active = (evt.currentTarget as HTMLElement)?.dataset?.type
    if (active) {
      const index = this.state.actives.indexOf(active)
      if (index === -1) {
        this.state.actives.push((evt.currentTarget as HTMLElement)?.dataset?.type || '')
      } else {
        this.state.actives.splice(index, 1)
      }
    }

    evt.preventDefault()
    this.update()
  }

  render() {
    return (
      <nav
        onTouchStart={(evt) => evt.stopPropagation()}
        style={{
          transition: 'all 0.3s linear 0s',
          transform: menuShow.value ? 'translateX(0)' : 'translateX(-100%)',
        }}
        id="sidenav-main"
        class="fixed left-0 top-0 z-[1036] h-screen w-60 -translate-x-full bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] dark:bg-neutral-800 lg:data-[te-sidenav-hidden='false']:translate-x-0 sidenav-primary perfect-scrollbar ps--active-y group/ps [overflow-anchor:none] overflow-auto"
        data-te-sidenav-init=""
        data-te-sidenav-mode-breakpoint-over="0"
        data-te-sidenav-mode-breakpoint-side="xl"
        data-te-sidenav-hidden="false"
        data-te-sidenav-mode="side"
        data-te-sidenav-content="#page-content"
        data-te-sidenav-accordion="true"
      >
        <a
          href="javascript:void(0)"
          onClick={this.goBackHome}
          class=" flex items-center justify-center py-4 pr-3  bg-neutral-50 text-lg font-medium outline-none dark:text-neutral-100 dark:bg-neutral-800"
          aria-current="page"
        >
          <img src="https://omi.cdn-go.cn/s/latest/omi.svg" class="pr-2 w-8 logo" alt="Omi logo" />
          OMIU
        </a>

        <ul class="relative m-0 mx-2 list-none px-[0.2rem] pb-80" data-te-sidenav-menu-ref="">
          <li class="relative">
            <a
              class="hover:bg-[rgba(59,113,202,0.05)] dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-[rgba(59,113,202,0.05)] focus:text-inherit focus:outline-none active:[rgba(59,113,202,0.05)] active:text-inherit active:outline-none motion-reduce:transition-none dark:focus:bg-white/10 dark:active:bg-white/10 flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none dark:text-gray-300 relative overflow-hidden inline-block align-bottom"
              onClick={this.toggle}
              data-type="Components"
              role="button"
              aria-expanded="false"
              tabindex="0"
            >
              <span class="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
                  <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z"></path>
                </svg>
              </span>
              <span>Components</span>
              <span
                class={classNames({
                  'absolute -right-1 ml-auto mr-[0.8rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300':
                    true,
                  'rotate-180': this.state.actives.indexOf('Components') === -1,
                })}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                </svg>
              </span>
            </a>
            <ul
              class={classNames({
                ' relative m-0 list-none p-0': true,
                '!visible hidden': this.state.actives.indexOf('Components') === -1,
              })}
              id="sidenav-collapse-122672-0-4"
            >
              {componentsPages.map((page) => {
                return (
                  <li class="relative mx-1 first:mt-1">
                    <a
                      href="javascript:void()"
                      onClick={(evt) => this.goTo(evt, page.path)}
                      class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                      tabindex="0"
                    >
                      {page.name.charAt(0).toUpperCase() + page.name.slice(1)}
                    </a>
                  </li>
                )
              })}
            </ul>
          </li>

          <li class="relative">
            <a
              class="hover:bg-[rgba(59,113,202,0.05)] dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-[rgba(59,113,202,0.05)] focus:text-inherit focus:outline-none active:[rgba(59,113,202,0.05)] active:text-inherit active:outline-none motion-reduce:transition-none dark:focus:bg-white/10 dark:active:bg-white/10 flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none dark:text-gray-300 relative overflow-hidden inline-block align-bottom"
              onClick={this.toggle}
              data-type="Forms"
              role="button"
              aria-expanded="false"
              tabindex="0"
            >
              <span class="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="3"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  ></path>
                </svg>
              </span>
              <span>Forms</span>
              <span
                class={classNames({
                  'absolute -right-1 ml-auto mr-[0.8rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300':
                    true,
                  'rotate-180': this.state.actives.indexOf('Forms') === -1,
                })}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                </svg>
              </span>
            </a>
            <ul
              class={classNames({
                ' relative m-0 list-none p-0': true,
                '!visible hidden': this.state.actives.indexOf('Forms') === -1,
              })}
            >
              {formsPages.map((page) => {
                return (
                  <li class="relative mx-1 first:mt-1">
                    <a
                      href="javascript:void()"
                      onClick={(evt) => this.goTo(evt, page.path)}
                      class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                      tabindex="0"
                    >
                      {page.name.charAt(0).toUpperCase() + page.name.slice(1)}
                    </a>
                  </li>
                )
              })}
            </ul>
          </li>
        </ul>
      </nav>
    )
  }
}