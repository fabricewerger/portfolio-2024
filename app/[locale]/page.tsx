import { useTranslations } from 'next-intl'
import Link from 'next-intl/link'
import About from '@/public/Picture.jpg'
import DefaultBlur from '@/src/components/content/Static/DefaultBlur'

export default function Home() {
  const t = useTranslations('Index')

  return (
    <div>
      <DefaultBlur src={About} />
      <div>
        <Link className='text-black' href='/' locale='en'>
          In english
        </Link>{' '}
        |{' '}
        <Link href='/' locale='nl'>
          In Dutch
        </Link>
        <br />
        <br />
      </div>
      <div>
        <p className='text-black'>{t('title')}</p>
        <p>{t('subtitle')}</p>
      </div>
      <div className='h-[500px]'>test1</div>
      <div className='h-[500px]'>test2</div>
      <div className='h-[500px]'>test3</div>
    </div>
  )
}
