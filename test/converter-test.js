const expect = require('chai').expect;
const converter = require('../converter');

describe('The Color Converter', () => {

  describe('should convert RGB to HEX', () => {
    it('the color black', () => {
      expect(converter.rgbToHex([0, 0, 0])).to.equal('000000');
    });

    it('the color white', () => {
      expect(converter.rgbToHex([255, 255, 255])).to.equal('ffffff');
    });

    it('the color red', () => {
      expect(converter.rgbToHex([255, 0, 0])).to.equal('ff0000');
    });
  });

  describe('should convert HEX to RGB', () => {
    it('the color #000000', () => {
      expect(converter.hexToRgb('000000')).to.eql([0, 0, 0])
    });

    it('the color #ffffff', () => {
      expect(converter.hexToRgb('FFFFFF')).to.eql([255, 255, 255])
    });

    it('the color #ff0000', () => {
      expect(converter.hexToRgb('FF0000')).to.eql([255, 0, 0])
    });
  });

});
