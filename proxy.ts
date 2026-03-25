import { NextRequest, NextResponse } from 'next/server'

import { ASINS } from './asins'

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone()
  const cookieName = 'source'


   // Если зашли на / и есть кука
  if (url.pathname === '/') {
    const redirectFlag = request.cookies.get(cookieName)

    if (redirectFlag) {
      const randomUrl = ASINS[Math.floor(Math.random() * ASINS.length)]
      //проверить url.search и удалить все параметры, оставить только utm_source
      const params = new URLSearchParams(url.search)
      const utmSource = params.get('utm_source')
      url.search = utmSource ? `?utm_source=${utmSource}` : ''


      // передавай в редирект URL и query параметры
      const response = NextResponse.redirect("https://www.amazon.com/dp/" + randomUrl + "/?tag=easycover06-20" + url.search)

      // удаляем cookie
      response.cookies.set(cookieName, '', {
        path: '/',
        maxAge: 0,
      })

      return response
    }
  }

  return NextResponse.next()
}


// применяем middleware только к /
export const config = {
  matcher: ['/'],
}

