declare namespace NodeJs {
  interface Global {
    //testRequest: SuperTest<Test>;
    testRequest: import('supertest').SuperTest<import('supertest').Test>;
  }
}
