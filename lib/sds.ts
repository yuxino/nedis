// SDS结构
interface sdshdr {
  // 字节总长度
  len: number;
  // 未使用的字节数量
  free: number;
  // 自己数组
  char: string[];
}
