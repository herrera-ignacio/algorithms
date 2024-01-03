const isSecurityDevice = (str) => str === '1';

/**
 * 
 * @param {string[]} bank 
 * @return {number}
 */
const numberOfBeams = (bank) => {
  const rowsWithSecurityDevices = [];

  for (let i = 0; i < bank.length; i++) {
    let totalDevices = 0;
    for (let j = 0; j < bank[i].length; j++) {
      if (isSecurityDevice(bank[i][j])) {
        totalDevices++;
      }
    }
    
    if (totalDevices > 0) {
      rowsWithSecurityDevices.push(totalDevices);
    }
  }

  return rowsWithSecurityDevices.reduce((acc, devices, i) => {
    return i + 1 < rowsWithSecurityDevices.length
      ? acc + devices * rowsWithSecurityDevices[i + 1]
      : acc
  }, 0);
}
