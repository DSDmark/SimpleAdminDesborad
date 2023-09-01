// generating random id
function uuid(): string {
  const uuid = window.crypto.randomUUID()

  return uuid
}

export default uuid
