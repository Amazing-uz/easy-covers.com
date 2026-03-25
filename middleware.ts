import { NextRequest, NextResponse } from 'next/server'

const externalLinks = [
  "https://amzn.to/4c3uNHi"
]

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const cookieName = 'test'

  // Если зашли на /redirect
  if (url.pathname === '/kokoro') {
    const response = NextResponse.redirect(new URL('/', request.url))
    response.cookies.set(cookieName, '1', {
      path: '/',
      maxAge: 60,
      httpOnly: true,
    })
    return response
  }

  // Если зашли на / и есть кука
  if (url.pathname === '/') {
    const redirectFlag = request.cookies.get(cookieName)

    if (redirectFlag) {
      const randomUrl = externalLinks[Math.floor(Math.random() * externalLinks.length)]

      const response = NextResponse.redirect(randomUrl)

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

// применяем middleware только к / и /redirect
export const config = {
  matcher: ['/', '/kokoro'],
}

