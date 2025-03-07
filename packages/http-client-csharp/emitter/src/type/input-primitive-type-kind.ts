// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

// TODO: clean up primitive types, separate types info from encoding info
// https://github.com/Azure/autorest.csharp/issues/4681
export enum InputPrimitiveTypeKind {
  AzureLocation = "AzureLocation",
  Boolean = "Boolean",
  BinaryData = "BinaryData",
  Bytes = "Bytes",
  BytesBase64Url = "BytesBase64Url",
  ContentType = "ContentType",
  Date = "Date",
  DateTime = "DateTime",
  DateTimeISO8601 = "DateTimeISO8601",
  DateTimeRFC1123 = "DateTimeRFC1123",
  DateTimeRFC3339 = "DateTimeRFC3339",
  DateTimeRFC7231 = "DateTimeRFC7231",
  DateTimeUnix = "DateTimeUnix",
  Decimal = "Decimal",
  Decimal128 = "Decimal128",
  DurationISO8601 = "DurationISO8601",
  DurationConstant = "DurationConstant",
  DurationSeconds = "DurationSeconds",
  DurationSecondsFloat = "DurationSecondsFloat",
  DurationSecondsDouble = "DurationSecondsDouble",
  ETag = "Etag",
  Float32 = "Float32",
  Float64 = "Float64",
  Float128 = "Float128",
  Guid = "Guid",
  Int32 = "Int32",
  Int64 = "Int64",
  SafeInt = "SafeInt",
  IPAddress = "IPAddress",
  Object = "Object",
  RequestMethod = "RequestMethod",
  ResourceIdentifier = "ResourceIdentifier",
  ResourceType = "ResourceType",
  Stream = "Stream",
  String = "String",
  Time = "Time",
  Uri = "Uri",
  Enum = "Enum",
  SByte = "SByte", //int8
  Byte = "Byte", //uint8
}
