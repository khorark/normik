import { norm2Store, norm2Server } from "./index.js";

const mockData = {
  user_name: "bob",
  age: 7,
  money: {
    now: 10
  },
  phones: [7914, 8914]
};

const mockScheme = [
  ["user_name", "userName"],
  ["age"],
  ["money.now", "moneyNow", 0],
  ["email", "", null],
  ["phones", "phone.bob"]
];

const mockRes = {
  userName: "bob",
  age: 7,
  moneyNow: 10,
  email: null,
  phone: {
    bob: [7914, 8914]
  }
};

describe("Checked convert data", () => {
  it("From server to store - norm2Store", () => {
    const res = norm2Store(mockData, mockScheme);
    expect(res).toEqual(mockRes);
  });

  it("From store to server - norm2Store", () => {
    const res = norm2Server(mockRes, mockScheme);
    expect(res).toEqual({ ...mockData, email: null });
  });
});
