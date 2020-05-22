const express = require('express')
const router = express.Router()
const { UnauthorizedError } = require('../common/errors')

/**
 * Read Route
 *
 * Accepts
 * ```json
 {
    "did": "did:hedera..."
 }
 * ```
 * Response
 * ```json
 {
    "@context": "https://www.w3.org/ns/did/v1",
    "id": "did:hedera:mainnet:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm;hedera:mainnet:fid=0.0.123",
    "created": "2020-04-21T17:34:00Z",
    "authentication": [
      "did:hedera:mainnet:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm;hedera:mainnet:fid=0.0.123#did-root-key"
    ],
    "publicKey": [
      {
        "id": "did:hedera:mainnet:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm;hedera:mainnet:fid=0.0.123#did-root-key",
        "type": "Ed25519VerificationKey2018",
        "controller": "did:hedera:mainnet:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm;hedera:mainnet:fid=0.0.123",
        "publicKeyBase58": "H3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV"
      }
    ],
    "service": [
      {
        "id": "did:hedera:mainnet:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm;hedera:mainnet:fid=0.0.123#vcs",
        "type": "VerifiableCredentialService",
        "serviceEndpoint": "https://example.com/vc/"
      }
    ]
  }
 * ```
 */
router.get('/did', async (req, res, next) => {
  try {
    res.json(
      {
        '@context': 'https://www.w3.org/ns/did/v1',
        id: 'did:hedera:mainnet:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm;hedera:mainnet:fid=0.0.123',
        created: '2020-04-21T17:34:00Z',
        authentication: [
          'did:hedera:mainnet:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm;hedera:mainnet:fid=0.0.123#did-root-key'
        ],
        publicKey: [
          {
            id: 'did:hedera:mainnet:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm;hedera:mainnet:fid=0.0.123#did-root-key',
            type: 'Ed25519VerificationKey2018',
            controller: 'did:hedera:mainnet:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm;hedera:mainnet:fid=0.0.123',
            publicKeyBase58: 'H3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV'
          }
        ],
        service: [
          {
            id: 'did:hedera:mainnet:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm;hedera:mainnet:fid=0.0.123#vcs',
            type: 'VerifiableCredentialService',
            serviceEndpoint: 'https://example.com/vc/'
          }
        ]
      }
    )
  } catch (err) {
    if (err instanceof UnauthorizedError) {
      res.sendStatus(err.statusCode)
    } else {
      res.sendStatus(500)
    }
  }
})

/**
 * Create Route
 *
 * Accepts
 * ```json
 {
    "@context": "https://www.w3.org/ns/did/v1",
    "id": "did:hedera:mainnet:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm;hedera:mainnet:fid=0.0.123",
    "authentication": [
      "did:hedera:mainnet:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm;hedera:mainnet:fid=0.0.123#did-root-key"
    ],
    "publicKey": [
      {
        "id": "did:hedera:mainnet:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm;hedera:mainnet:fid=0.0.123#did-root-key",
        "type": "Ed25519VerificationKey2018",
        "controller": "did:hedera:mainnet:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm;hedera:mainnet:fid=0.0.123",
        "publicKeyBase58": "H3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV"
      }
    ],
  }
 * ```
 */
router.post('/did', async (req, res, next) => {
  try {
    res.status(200).json({
      mode: 'plain',
      message: {
        operation: 'create',
        did: 'did:hedera:mainnet:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm;hedera:mainnet:fid=0.0.123',
        didDocumentBase64: 'ewogICJAY29udGV...9tL3ZjLyIKICAgIH0KICBdCn0=',
        timestamp: '2010-04-23T14:37:43.511Z'
      }
    })
  } catch (err) {
    if (err instanceof UnauthorizedError) {
      res.sendStatus(err.statusCode)
    } else {
      res.sendStatus(500)
    }
  }
})

/**
 * Update Route
 *
 * Accepts
 * ```json
 {
    "@context": "https://www.w3.org/ns/did/v1",
    "id": "did:hedera:mainnet:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm;hedera:mainnet:fid=0.0.123",
    "authentication": [
      "did:hedera:mainnet:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm;hedera:mainnet:fid=0.0.123#did-root-key"
    ],
    "publicKey": [
      {
        "id": "did:hedera:mainnet:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm;hedera:mainnet:fid=0.0.123#did-root-key",
        "type": "Ed25519VerificationKey2018",
        "controller": "did:hedera:mainnet:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm;hedera:mainnet:fid=0.0.123",
        "publicKeyBase58": "H3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV"
      }
    ],
  }
 * ```
 */
router.put('/did', async (req, res, next) => {
  try {
    res.status(200).json({
      mode: 'plain',
      message: {
        operation: 'update',
        did: 'did:hedera:mainnet:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm;hedera:mainnet:fid=0.0.123',
        didDocumentBase64: 'ewogICJAY29udGV...9tL3ZjLyIKICAgIH0KICBdCn0=',
        timestamp: '2010-04-23T14:37:43.511Z'
      }
    })
  } catch (err) {
    if (err instanceof UnauthorizedError) {
      res.sendStatus(err.statusCode)
    } else {
      res.sendStatus(500)
    }
  }
})

/**
 * Delete Route
 *
 * Accepts
 * ```json
 {
    "@context": "https://www.w3.org/ns/did/v1",
    "id": "did:hedera:mainnet:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm;hedera:mainnet:fid=0.0.123",
    "authentication": [
      "did:hedera:mainnet:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm;hedera:mainnet:fid=0.0.123#did-root-key"
    ],
    "publicKey": [
      {
        "id": "did:hedera:mainnet:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm;hedera:mainnet:fid=0.0.123#did-root-key",
        "type": "Ed25519VerificationKey2018",
        "controller": "did:hedera:mainnet:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm;hedera:mainnet:fid=0.0.123",
        "publicKeyBase58": "H3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV"
      }
    ],
  }
 * ```
 */
router.delete('/did', async (req, res, next) => {
  try {
    res.status(200).json({
      mode: 'plain',
      message: {
        operation: 'delete',
        did: 'did:hedera:mainnet:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm;hedera:mainnet:fid=0.0.123',
        didDocumentBase64: 'ewogICJAY29udGV...9tL3ZjLyIKICAgIH0KICBdCn0=',
        timestamp: '2010-04-23T14:37:43.511Z'
      }
    })
  } catch (err) {
    if (err instanceof UnauthorizedError) {
      res.sendStatus(err.statusCode)
    } else {
      res.sendStatus(500)
    }
  }
})

/**
 * Submit Route
 *
 * Accepts
 * ```json
 {
    "mode": "plain",
    "message": {
      "operation": "create",
      "did": "did:hedera:mainnet:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm;hedera:mainnet:fid=0.0.123",
      "didDocumentBase64": "ewogICJAY29udGV...9tL3ZjLyIKICAgIH0KICBdCn0=",
      "timestamp": "2020-04-23T14:37:43.511Z"
    },
    "signature":  "QNB13Y7Q9...1tzjn4w=="
  }
 * ```
 */

router.post('/did-submit', async (req, res, next) => {
  try {
    res.sendStatus(202)
  } catch (err) {
    if (err instanceof UnauthorizedError) {
      res.sendStatus(err.statusCode)
    } else {
      res.sendStatus(500)
    }
  }
})

module.exports = router
