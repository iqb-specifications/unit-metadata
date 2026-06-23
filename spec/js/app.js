
    const schema = {
  "asyncapi": "2.5.0",
  "info": {
    "title": "unit-metadata",
    "description": "Specification for metadata as part of the unit data.",
    "license": {
      "name": "CC0 1.0",
      "url": "https://creativecommons.org/publicdomain/zero/1.0/"
    },
    "version": " - click on schema id to expand",
    "contact": {
      "name": "Home of iqb-specifications (German only)",
      "url": "https://iqb-specifications.github.io/"
    }
  },
  "channels": {
    "iqb_data_structures": {
      "subscribe": {
        "operationId": "Please select one schema",
        "message": {
          "messageId": "select_schema",
          "x-parser-message-name": "select_schema"
        }
      }
    }
  },
  "components": {
    "schemas": {
      "metadata-values": {
        "$id": "unit-metadata@0.1",
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Unit Metadata.",
        "description": "Specification for metadata as part of the unit data.",
        "type": "object",
        "properties": {
          "createdAt": {
            "description": "Timestamp of creation",
            "type": "string",
            "examples": [
              "2026-04-09T13:15:10.977Z"
            ],
            "x-parser-schema-id": "<anonymous-schema-1>"
          },
          "changedAt": {
            "description": "Timestamp of last change",
            "type": "string",
            "examples": [
              "2026-04-09T13:15:10.977Z"
            ],
            "x-parser-schema-id": "<anonymous-schema-2>"
          },
          "metadata": {
            "type": "array",
            "items": {
              "$id": "metadata-values@iqb-standard@3.0",
              "$schema": "http://json-schema.org/draft-07/schema#",
              "title": "Metadata Values",
              "description": "Data structure to store metadata",
              "type": "object",
              "properties": {
                "profileId": {
                  "type": "string",
                  "description": "Identifier for the metadata profile",
                  "minLength": 1,
                  "x-parser-schema-id": "<anonymous-schema-4>"
                },
                "order": {
                  "type": "integer",
                  "description": "Specifies the position of this profile if more than one are used. Set to -1 if you want to hide/disable the profile.",
                  "x-parser-schema-id": "<anonymous-schema-5>"
                },
                "entries": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "string",
                        "description": "Id of the profile entry related to these data",
                        "minLength": 1,
                        "x-parser-schema-id": "<anonymous-schema-8>"
                      },
                      "label": {
                        "type": "array",
                        "description": "Used for storing the input of texts. This type applies also in cases when only one language is used.",
                        "items": {
                          "type": "object",
                          "properties": {
                            "lang": {
                              "type": "string",
                              "minLength": 1,
                              "description": "ISO-language code",
                              "pattern": "^[a-z]{2}$",
                              "x-parser-schema-id": "<anonymous-schema-11>"
                            },
                            "value": {
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-12>"
                            }
                          },
                          "required": [
                            "lang",
                            "value"
                          ],
                          "additionalProperties": false,
                          "x-parser-schema-id": "<anonymous-schema-10>"
                        },
                        "minItems": 1,
                        "x-parser-schema-id": "<anonymous-schema-9>"
                      },
                      "value": {
                        "anyOf": [
                          "$ref:$.components.schemas.metadata-values.properties.metadata.items.properties.entries.items.properties.label",
                          {
                            "type": "array",
                            "description": "Used for storing selected vocabulary entries and (optional) additional texts.",
                            "items": {
                              "type": "object",
                              "properties": {
                                "id": {
                                  "type": "string",
                                  "minLength": 1,
                                  "description": "Full id of the vocabulary entry as url - including the vocabulary url",
                                  "x-parser-schema-id": "<anonymous-schema-16>"
                                },
                                "label": "$ref:$.components.schemas.metadata-values.properties.metadata.items.properties.entries.items.properties.label",
                                "annotation": "$ref:$.components.schemas.metadata-values.properties.metadata.items.properties.entries.items.properties.label"
                              },
                              "required": [
                                "id"
                              ],
                              "additionalProperties": false,
                              "x-parser-schema-id": "<anonymous-schema-15>"
                            },
                            "minItems": 1,
                            "x-parser-schema-id": "<anonymous-schema-14>"
                          },
                          {
                            "type": "object",
                            "description": "Used for uncoded text, numbers and boolean.",
                            "properties": {
                              "raw": {
                                "type": "string",
                                "description": "Pure value. Numbers and boolean in JavaScript toString() notation ('true', 'false', '23.566').",
                                "x-parser-schema-id": "<anonymous-schema-18>"
                              },
                              "asText": "$ref:$.components.schemas.metadata-values.properties.metadata.items.properties.entries.items.properties.label"
                            },
                            "required": [
                              "raw"
                            ],
                            "additionalProperties": false,
                            "x-parser-schema-id": "<anonymous-schema-17>"
                          }
                        ],
                        "x-parser-schema-id": "<anonymous-schema-13>"
                      }
                    },
                    "required": [
                      "id",
                      "value"
                    ],
                    "x-parser-schema-id": "<anonymous-schema-7>"
                  },
                  "minItems": 1,
                  "x-parser-schema-id": "<anonymous-schema-6>"
                }
              },
              "required": [
                "profileId",
                "entries"
              ],
              "additionalProperties": false,
              "$defs": {
                "language_coded_texts": "$ref:$.components.schemas.metadata-values.properties.metadata.items.properties.entries.items.properties.label",
                "vocabulary_entries": "$ref:$.components.schemas.metadata-values.properties.metadata.items.properties.entries.items.properties.value.anyOf[1]",
                "simple_value": "$ref:$.components.schemas.metadata-values.properties.metadata.items.properties.entries.items.properties.value.anyOf[2]"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-3>"
          }
        },
        "additionalProperties": false,
        "$defs": {
          "metadata": "$ref:$.components.schemas.metadata-values.properties.metadata.items"
        },
        "x-parser-schema-id": "unit-metadata@0.1"
      }
    }
  },
  "x-parser-spec-parsed": true,
  "x-parser-api-version": 3,
  "x-parser-spec-stringified": true
};
    const config = {"show":{"sidebar":false},"sidebar":{"showOperations":"byDefault"},"showOperations":false};
    const appRoot = document.getElementById('root');
    AsyncApiStandalone.render(
        { schema, config, }, appRoot
    );
  