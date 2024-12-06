# Missing 'Content-Type' Header in Node.js HTTP Response

This repository demonstrates a common, yet subtle, error in Node.js HTTP servers: the omission of the `Content-Type` header in the response.  This can lead to unexpected behavior from clients that rely on content negotiation.

The `bug.js` file contains the problematic code. The `bugSolution.js` demonstrates the correct way to set the header.

## Problem

When a client makes a request to a Node.js HTTP server, the server *must* specify the `Content-Type` header to inform the client about the type of data being returned (e.g., `text/html`, `application/json`, `image/jpeg`).  Failure to do so can result in clients interpreting the response incorrectly or displaying it improperly.  The browser might incorrectly guess the content type and this can lead to security issues.

## Solution

Always set the `Content-Type` header in your response.  The correct content type depends on the data you're sending.