/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
const fs = require('fs')
const chai = require('chai')
const glob = require('glob')
const cheerio = require('cheerio')
const { expect } = chai

describe('Blogger template', () => {
  const files = glob.sync('./dist/*.xml')

  files.forEach((file) => {
    const template = fs.readFileSync(file, 'utf-8')
    const $ = cheerio.load(template, { xmlMode: true })

    describe(`File: ${file}`, () => {
      it('should start with <?xml version="1.0" encoding="UTF-8" ?>', () => {
        expect(template.startsWith('<?xml version="1.0" encoding="UTF-8" ?>')).to.be.true
      })

      it('should contain a single <b:skin> tag', () => {
        const skinTags = $('b\\:skin')
        expect(skinTags.length).to.equal(1)
      })

      it('should contain at least one <b:section> tag with a unique id attribute', () => {
        const sections = $('b\\:section')
        const idList = new Set()

        expect(sections.length, 'No <b:section> tag found').to.be.greaterThan(0)

        sections.each(function () {
          const id = $(this).attr('id')
          expect(id).to.exist
          expect(idList.has(id), `Duplicate id attribute: ${id}`).to.be.false
          idList.add(id)
        })
      })
    })
  })
})
