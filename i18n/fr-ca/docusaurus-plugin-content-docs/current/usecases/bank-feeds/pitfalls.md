---
title: "Pièges"
---

Des erreurs dans le parcours d'autorisation sont possibles aux étapes 3, 6 et 7.

Diagramme des étapes avec les étapes vulnérables surlignées en rouge

## Étape 3 : Écran de génération d'identifiants (hébergé par Codat).

Des erreurs peuvent survenir lors de l'envoi de l'utilisateur à la page de génération d'identifiants, et lors de la génération d'identifiants. Ces erreurs n'enverront pas l'utilisateur vers une autre partie du parcours. Le statut de connexion restera en statut pendingAuth.

Symptôme : Les identifiants ne sont pas générés, ou l'utilisateur n'est pas envoyé à la page de génération d'identifiants.

Cause : Erreurs intermittentes du côté Codat, liées à la page de génération d'identifiants.

Résolution : L'utilisateur a la possibilité de redémarrer le parcours depuis le flux BCA. Il n'y a aucun moyen d'interrompre cette erreur, car elle se produit dans QBO.

## Étape 6 : L'utilisateur saisit les identifiants de l'étape 3 dans QBO.

Les erreurs feront en sorte que l'utilisateur reste sur la page QBO. QBO dirigera l'utilisateur pour réessayer ses identifiants.

Symptôme : L'utilisateur ne peut pas terminer le parcours en utilisant les identifiants générés par Codat.

Cause : aucun compte bancaire à lier sur la connexion QBO ; erreurs intermittentes entre QBO et Codat

Résolution : L'utilisateur a la possibilité de redémarrer le parcours depuis le flux BCA. Il n'y a aucun moyen d'interrompre cette erreur, car elle se produit dans QBO.

## Étape 7 : L'utilisateur sélectionne le compte bancaire à lier et le compte auquel le mapper.

Les erreurs dirigeront soit l'utilisateur pour resélectionner le compte bancaire et le compte, soit pour réessayer un nouvel ensemble d'identifiants.

Symptôme : QBO ne termine pas la liaison du flux bancaire et du plan comptable.

Cause : Erreurs intermittentes entre QBO et Codat.

Résolution : L'utilisateur a la possibilité de redémarrer le parcours depuis le flux BCA. Il n'y a aucun moyen d'interrompre cette erreur, car elle se produit dans QBO
