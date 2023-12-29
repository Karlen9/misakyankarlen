import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitch } from 'widgets/ThemeSwitch'
import cls from './Navbar.module.scss'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { TranslateToggle } from './TranslateToggle/TranslateToggle'
import { useTheme } from 'app/providers/ThemeProvider'
import { useMemo } from 'react'
import { GithubIcon } from 'shared/assets/icons/GithubIcon'
interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()

  const { theme } = useTheme()
  const isDark = useMemo(() => theme === 'dark', [theme])

  return (
    <div className={classNames(cls.navbar, {}, [className ?? ''])}>
      <div className={cls.leftBar}>
        <div className={cls.logo}></div>

        <div className={cls.links}>
          <AppLink theme={AppLinkTheme.PRIMARY} to={'/'}>
            {t('Main')}
          </AppLink>
          <AppLink theme={AppLinkTheme.PRIMARY} to={'/about'}>
            {t('About')}
          </AppLink>
        </div>
      </div>

      <div className={cls.rightBar}>
        <div className={cls.switch}>
          <ThemeSwitch />
        </div>

        <TranslateToggle />

        <Button theme={ThemeButton.ICON}>
          <GithubIcon
            color={isDark ? '#4FD1C5' : '#2D3748'}
            width={22}
            height={22}
          />
        </Button>
      </div>
    </div>
  )
}
