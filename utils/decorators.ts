export function extendProperties(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const result = originalMethod.apply(this, args);

    // Extend properties: add createdAt if not present, or update modifiedAt
    if (result && typeof result === 'object') {
      if (!result.createdAt) {
        result.createdAt = new Date().toISOString();
      }
      result.modifiedAt = new Date().toISOString();
    }

    return result;
  };

  return descriptor;
}
