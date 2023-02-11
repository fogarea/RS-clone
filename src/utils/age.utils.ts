class Age {
  getAge(date: string) {
    const diff = Date.now() - new Date(date).getTime();
    const dateDiff = new Date(diff);

    return Math.abs(dateDiff.getUTCFullYear() - 1970);
  }
}

export default new Age();
