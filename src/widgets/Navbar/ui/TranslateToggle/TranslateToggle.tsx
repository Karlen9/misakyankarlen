import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import USFlag from 'shared/assets/icons/us-flag.svg'
import RusFlag from 'shared/assets/icons/russian-flag.svg'
import SpainFlag from 'shared/assets/icons/spain-flag.svg'
import { useState } from 'react'
import cls from './TranslateToggle.module.scss'

enum Lang {
  RU = 'ru',
  EN = 'en',
  ES = 'es'
}
const TranslationIcons: Record<string, React.ReactElement> = {
  ru: <RusFlag width={28} height={28} />,
  en: <USFlag width={28} height={28} />,
  es: <SpainFlag width={28} height={28} />
}

export const TranslateToggle = () => {
  const [isSelectOpen, setIsSelectOpen] = useState(false)
  const { i18n } = useTranslation()

  const onOpenSelect = () => {
    setIsSelectOpen((prev) => !prev)
  }

  const onSelectLanguage = (lang: Lang) => {
    i18n.changeLanguage(lang).catch((err) => {
      console.error(err)
    })
    setIsSelectOpen(false)
  }

  return (
    <div>
      {isSelectOpen ? (
        <>
          <Button theme={ThemeButton.CLEAR} onClick={onOpenSelect}>
            <div className={cls.emptyCircle} />
          </Button>
          <div className={cls.select}>
            <Button
              theme={ThemeButton.CLEAR}
              onClick={() => onSelectLanguage(Lang.EN)}
            >
              <USFlag width={28} height={28} />
            </Button>
            <Button
              theme={ThemeButton.CLEAR}
              onClick={() => onSelectLanguage(Lang.RU)}
            >
              <RusFlag width={28} height={28} />
            </Button>
            <Button
              theme={ThemeButton.CLEAR}
              onClick={() => onSelectLanguage(Lang.ES)}
            >
              <SpainFlag width={28} height={28} />
            </Button>
          </div>
        </>
      ) : (
        <Button theme={ThemeButton.CLEAR} onClick={onOpenSelect}>
          {TranslationIcons[i18n.language]}
        </Button>
      )}
    </div>
  )
}
