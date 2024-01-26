import calculateTotal from "./calculateTotal";

describe('calculateTotal', () => {
  it('returns the correct total for a valid property name', () => {
    const data = [
      { confirmed: 10, deaths: 2 },
      { confirmed: 20, deaths: 3 },
    ];
    const total = calculateTotal(data, 'confirmed');
    expect(total).toBe(30); 
  });

  it('returns 0 for an empty array', () => {
    const total = calculateTotal([], 'confirmed');
    expect(total).toBe(0);
  });

  it('returns 0 for an invalid property name', () => {
    const data = [
      { confirmed: 10, deaths: 2 },
      { confirmed: 20, deaths: 3 },
    ];
    const total = calculateTotal(data, 'recovered');
    expect(total).toBe(0); 
  });
});
