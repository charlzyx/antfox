import '../../../../__mock__/matchMedia.mock';

// const olog = console.log;

type Act = 'toEqual' | 'toBeGreaterThan';
console.error = () => {
  /** */
};

console.log = (is: string, act: Act, data: any, want: any, ...others: any) => {
  // olog(is, data, want, ...others);
  if (is === 'expect') {
    expect(data)[act](want);
    // expect().toBeGreaterThan
  }
};
