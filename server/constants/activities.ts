/*
 * Constant strings used in the activity model
 */

enum ActivityTypes {
  ACTIVITY_ALL = 'all',
  CONNECTED_ACCOUNT_CREATED = 'connected_account.created',
  COLLECTIVE_CREATED_GITHUB = 'collective.created.github',
  COLLECTIVE_APPLY = 'collective.apply',
  COLLECTIVE_APPROVED = 'collective.approved',
  COLLECTIVE_REJECTED = 'collective.rejected',
  COLLECTIVE_CREATED = 'collective.created',
  COLLECTIVE_COMMENT_CREATED = 'collective.comment.created',
  COLLECTIVE_CONVERSATION_CREATED = 'collective.conversation.created',
  COLLECTIVE_EXPENSE_CREATED = 'collective.expense.created',
  COLLECTIVE_EXPENSE_DELETED = 'collective.expense.deleted',
  COLLECTIVE_EXPENSE_UPDATED = 'collective.expense.updated',
  COLLECTIVE_EXPENSE_REJECTED = 'collective.expense.rejected',
  COLLECTIVE_EXPENSE_APPROVED = 'collective.expense.approved',
  COLLECTIVE_EXPENSE_UNAPPROVED = 'collective.expense.unapproved',
  COLLECTIVE_EXPENSE_PAID = 'collective.expense.paid',
  COLLECTIVE_EXPENSE_MARKED_AS_UNPAID = 'collective.expense.unpaid',
  COLLECTIVE_EXPENSE_MARKED_AS_SPAM = 'collective.expense.spam',
  COLLECTIVE_EXPENSE_MARKED_AS_INCOMPLETE = 'collective.expense.incomplete',
  COLLECTIVE_EXPENSE_PROCESSING = 'collective.expense.processing',
  COLLECTIVE_EXPENSE_SCHEDULED_FOR_PAYMENT = 'collective.expense.scheduledForPayment',
  COLLECTIVE_EXPENSE_ERROR = 'collective.expense.error',
  COLLECTIVE_EXPENSE_INVITE_DRAFTED = 'collective.expense.invite.drafted',
  COLLECTIVE_EXPENSE_RECURRING_DRAFTED = 'collective.expense.recurring.drafted',
  COLLECTIVE_EXPENSE_MISSING_RECEIPT = 'collective.expense.missing.receipt',
  COLLECTIVE_VIRTUAL_CARD_MISSING_RECEIPTS = 'collective.virtualcard.missing.receipts',
  COLLECTIVE_VIRTUAL_CARD_SUSPENDED = 'collective.virtualcard.suspended',
  COLLECTIVE_FROZEN = 'collective.frozen',
  COLLECTIVE_UNFROZEN = 'collective.unfrozen',
  COLLECTIVE_MEMBER_CREATED = 'collective.member.created',
  COLLECTIVE_CORE_MEMBER_ADDED = 'collective.core.member.added',
  COLLECTIVE_CORE_MEMBER_INVITED = 'collective.core.member.invited',
  COLLECTIVE_CORE_MEMBER_INVITATION_DECLINED = 'collective.core.member.invitation.declined',
  COLLECTIVE_CORE_MEMBER_REMOVED = 'collective.core.member.removed',
  COLLECTIVE_CORE_MEMBER_EDITED = 'collective.core.member.edited',
  COLLECTIVE_TRANSACTION_CREATED = 'collective.transaction.created',
  COLLECTIVE_UPDATE_CREATED = 'collective.update.created',
  COLLECTIVE_UPDATE_PUBLISHED = 'collective.update.published',
  COLLECTIVE_CONTACT = 'collective.contact',
  COLLECTIVE_VIRTUAL_CARD_ADDED = 'collective.virtualcard.added',
  CONTRIBUTION_REJECTED = 'contribution.rejected',
  ORGANIZATION_COLLECTIVE_CREATED = 'organization.collective.created',
  SUBSCRIPTION_ACTIVATED = 'subscription.activated',
  SUBSCRIPTION_CONFIRMED = 'subscription.confirmed',
  SUBSCRIPTION_CANCELED = 'subscription.canceled',
  TICKET_CONFIRMED = 'ticket.confirmed',
  USER_CREATED = 'user.created',
  WEBHOOK_STRIPE_RECEIVED = 'webhook.stripe.received',
  WEBHOOK_PAYPAL_RECEIVED = 'webhook.paypal.received',
  COLLECTIVE_MONTHLY = 'collective.monthly',
  ORDERS_SUSPICIOUS = 'orders.suspicious',
  BACKYOURSTACK_DISPATCH_CONFIRMED = 'backyourstack.dispatch.confirmed',
  ACTIVATED_COLLECTIVE_AS_HOST = 'activated.collective.as.host',
  ACTIVATED_COLLECTIVE_AS_INDEPENDENT = 'activated.collective.as.independent',
  DEACTIVATED_COLLECTIVE_AS_HOST = 'deactivated.collective.as.host',
  VIRTUAL_CARD_REQUESTED = 'virtual_card.requested',
  PAYMENT_FAILED = 'payment.failed',

  // Not used anymore, leaving for historical reference
  ADDED_FUND_TO_ORG = 'added.fund.to.org',
  COLLECTIVE_TRANSACTION_PAID = 'collective.transaction.paid', // replaced with COLLECTIVE_EXPENSE_PAID
  COLLECTIVE_USER_ADDED = 'collective.user.added',
  COLLECTIVE_VIRTUAL_CARD_ASSIGNED = 'collective.virtualcard.assigned', // replaced with COLLECTIVE_VIRTUAL_CARD_ADDED
  COLLECTIVE_VIRTUAL_CARD_CREATED = 'collective.virtualcard.created', // replaced with COLLECTIVE_VIRTUAL_CARD_ADDED
}

/** This array defines the type of activities that are transactional and can not be unsubscribed by the user. */
export const TransactionalActivities = [
  ActivityTypes.ADDED_FUND_TO_ORG,
  ActivityTypes.COLLECTIVE_APPLY,
  ActivityTypes.COLLECTIVE_CORE_MEMBER_ADDED,
  ActivityTypes.COLLECTIVE_CORE_MEMBER_INVITED,
  ActivityTypes.COLLECTIVE_EXPENSE_ERROR,
  ActivityTypes.COLLECTIVE_EXPENSE_INVITE_DRAFTED,
  ActivityTypes.COLLECTIVE_EXPENSE_MISSING_RECEIPT,
  ActivityTypes.COLLECTIVE_EXPENSE_PAID,
  ActivityTypes.COLLECTIVE_EXPENSE_RECURRING_DRAFTED,
  ActivityTypes.COLLECTIVE_EXPENSE_REJECTED,
  ActivityTypes.COLLECTIVE_FROZEN,
  ActivityTypes.COLLECTIVE_MEMBER_CREATED,
  ActivityTypes.COLLECTIVE_REJECTED,
  ActivityTypes.COLLECTIVE_UNFROZEN,
  ActivityTypes.COLLECTIVE_VIRTUAL_CARD_MISSING_RECEIPTS,
  ActivityTypes.COLLECTIVE_VIRTUAL_CARD_SUSPENDED,
  ActivityTypes.CONTRIBUTION_REJECTED,
  ActivityTypes.ORGANIZATION_COLLECTIVE_CREATED,
  ActivityTypes.PAYMENT_FAILED,
  ActivityTypes.TICKET_CONFIRMED,
  ActivityTypes.USER_CREATED,
  ActivityTypes.VIRTUAL_CARD_REQUESTED,
];

export enum ActivityClasses {
  COLLECTIVE = 'collective',
  TRANSACTIONS = 'transactions',
  CONTRIBUTIONS = 'contributions',
  CONVERSATIONS = 'conversations',
  REPORTS = 'reports',
}

export const ActivitiesPerClass: Record<ActivityClasses, ActivityTypes[]> = {
  [ActivityClasses.COLLECTIVE]: [
    ActivityTypes.COLLECTIVE_MEMBER_CREATED,
    ActivityTypes.COLLECTIVE_APPLY,
    ActivityTypes.COLLECTIVE_APPROVED,
    ActivityTypes.COLLECTIVE_REJECTED,
  ],
  [ActivityClasses.TRANSACTIONS]: [
    ActivityTypes.COLLECTIVE_EXPENSE_CREATED,
    ActivityTypes.COLLECTIVE_EXPENSE_DELETED,
    ActivityTypes.COLLECTIVE_EXPENSE_UPDATED,
    ActivityTypes.COLLECTIVE_EXPENSE_REJECTED,
    ActivityTypes.COLLECTIVE_EXPENSE_APPROVED,
    ActivityTypes.COLLECTIVE_EXPENSE_UNAPPROVED,
    ActivityTypes.COLLECTIVE_EXPENSE_PAID,
    ActivityTypes.COLLECTIVE_EXPENSE_MARKED_AS_UNPAID,
    ActivityTypes.COLLECTIVE_EXPENSE_MARKED_AS_SPAM,
    ActivityTypes.COLLECTIVE_EXPENSE_MARKED_AS_INCOMPLETE,
    ActivityTypes.COLLECTIVE_EXPENSE_PROCESSING,
    ActivityTypes.COLLECTIVE_EXPENSE_SCHEDULED_FOR_PAYMENT,
    ActivityTypes.COLLECTIVE_EXPENSE_ERROR,
    ActivityTypes.COLLECTIVE_EXPENSE_INVITE_DRAFTED,
    ActivityTypes.COLLECTIVE_EXPENSE_RECURRING_DRAFTED,
    ActivityTypes.COLLECTIVE_EXPENSE_MISSING_RECEIPT,
    ActivityTypes.COLLECTIVE_VIRTUAL_CARD_MISSING_RECEIPTS,
    ActivityTypes.COLLECTIVE_VIRTUAL_CARD_SUSPENDED,
  ],
  [ActivityClasses.CONTRIBUTIONS]: [
    ActivityTypes.CONTRIBUTION_REJECTED,
    ActivityTypes.SUBSCRIPTION_ACTIVATED,
    ActivityTypes.SUBSCRIPTION_CONFIRMED,
    ActivityTypes.SUBSCRIPTION_CANCELED,
    ActivityTypes.ORDERS_SUSPICIOUS,
  ],
  [ActivityClasses.CONVERSATIONS]: [
    ActivityTypes.COLLECTIVE_COMMENT_CREATED,
    ActivityTypes.COLLECTIVE_CONVERSATION_CREATED,
  ],
  [ActivityClasses.REPORTS]: [ActivityTypes.COLLECTIVE_MONTHLY],
};

export default ActivityTypes;
