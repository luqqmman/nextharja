import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server';

export async function GET() {
  const dirRelativeToPublicFolder = 'gallery';

  const dir = path.resolve('./public', dirRelativeToPublicFolder);

  const filenames = fs.readdirSync(dir);

  const images = filenames.map(name => path.join('/', dirRelativeToPublicFolder, name))

  return NextResponse.json(images, {
    status: 200
  })
}

